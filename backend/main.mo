import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";


import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

// Specify the data migration function in the with-clause

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type NewsItem = {
    id : Nat;
    title : Text;
    date : Int;
    summary : Text;
    content : Text;
  };

  module NewsItem {
    public func compare(news1 : NewsItem, news2 : NewsItem) : Order.Order {
      Text.compare(news1.title, news2.title);
    };

    public func compareByDate(news1 : NewsItem, news2 : NewsItem) : Order.Order {
      Int.compare(news2.date, news1.date);
    };
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    timestamp : Int;
  };

  type SchoolContactInfo = {
    address : Text;
    phone : Text;
    email : Text;
  };

  // User Profile type as required by the frontend
  type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  var nextNewsId = 1;
  let news = Map.empty<Nat, NewsItem>();
  let messages = Map.empty<Int, ContactMessage>();

  let schoolInfo : SchoolContactInfo = {
    address = "123 School St, Townsville";
    phone = "+123456789";
    email = "contact@school.org";
  };

  // Required by frontend: get the caller's own profile (users only)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can get their profile");
    };
    userProfiles.get(caller);
  };

  // Required by frontend: save the caller's own profile (users only)
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save their profile");
    };
    userProfiles.add(caller, profile);
  };

  // Required by frontend: get another user's profile (own profile or admin)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Add News Item - admin only
  public shared ({ caller }) func addNewsItem(title : Text, summary : Text, content : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add news items");
    };
    let newsItem : NewsItem = {
      id = nextNewsId;
      title;
      date = Time.now();
      summary;
      content;
    };
    news.add(nextNewsId, newsItem);
    nextNewsId += 1;
  };

  // Get all news - public
  public query func getAllNews() : async [NewsItem] {
    news.values().toArray().sort(NewsItem.compareByDate);
  };

  // Get news by ID - public
  public query func getNewsById(_id : Nat) : async ?NewsItem {
    news.get(_id);
  };

  // Get contact info - public
  public query func getContactInfo() : async SchoolContactInfo {
    schoolInfo;
  };

  // Submit contact message - public (anyone can submit)
  public shared func submitContactMessage(name : Text, email : Text, subject : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      email;
      subject;
      message;
      timestamp = Time.now();
    };
    messages.add(contactMessage.timestamp, contactMessage);
  };

  // Get all messages - admin only
  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all messages");
    };
    messages.values().toArray();
  };

  // Get admin messages - admin only (alias for getAllMessages)
  public query ({ caller }) func getAdminMessages() : async [ContactMessage] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all messages");
    };
    messages.values().toArray();
  };
};
