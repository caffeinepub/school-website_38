import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { NewsItem, SchoolContactInfo, UserProfile, ContactMessage } from '../backend';

export function useGetAllNews() {
  const { actor, isFetching } = useActor();

  return useQuery<NewsItem[]>({
    queryKey: ['news'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetNewsById(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<NewsItem | null>({
    queryKey: ['news', id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getNewsById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<SchoolContactInfo>({
    queryKey: ['contactInfo'],
    queryFn: async () => {
      if (!actor) {
        return { address: '', phone: '', email: '' };
      }
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      subject,
      message,
    }: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactMessage(name, email, subject, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    },
  });
}

export function useAddNewsItem() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      title,
      summary,
      content,
    }: {
      title: string;
      summary: string;
      content: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addNewsItem(title, summary, content);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
}

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetAdminMessages() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactMessage[]>({
    queryKey: ['adminMessages'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAdminMessages();
    },
    enabled: !!actor && !isFetching,
    retry: false,
  });
}
