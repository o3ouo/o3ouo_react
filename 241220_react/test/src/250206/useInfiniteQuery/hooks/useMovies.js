import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchMoives = async (page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzg3M2FmNmE0YjRiNjE2YzVmMGZmYTc5MzRhODRiMiIsIm5iZiI6MTczODgwMTgyNS4xMDksInN1YiI6IjY3YTQwMmExNGRjMDUyYmE1NTg1YTllOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Swpeh4m49rz6Kp5Hp6iBltVXq5e-LYdRQOh_Y7K1Aec' // 내 성공 토큰 값 가져와야함
      }
    });
  return response.data;
}

export const useGetMovies = () => {
  return useInfiniteQuery({
    queryKey: ['top-rated'],
    queryFn: ({ pageParam }) => { return fetchMoives(pageParam) }, // pageParam : 페이지를 찾아줌 (이미 정해져 있는 값)
    getNextPageParam: (last) => {
      if (last.page < last.total_pages) {
        return last.page + 1;
      }
      return undefined; // 1에서부터 100까지의 페이지를 다 봤을 때 끝낸다
    }, // 함수 / last: 지난 페이지의 값을 받음
    staleTime: 15000,
    initialPageParam: 1, // 기본 페이지의 값
    
  });
}