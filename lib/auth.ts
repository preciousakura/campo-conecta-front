export const fetcher = async (path: string, init?: RequestInit) => {
    return await fetch(`${process.env.EXPO_PUBLIC_API_URL}${path}`, init);
}
