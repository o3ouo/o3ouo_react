import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// 함수로 만들어서 사용
const fetchProduct = () => {
  return axios.get(`http://localhost:5000/products`);
};

// 에러 상태를 가지고 올 때에는 isError, error 두 개를 가지고 와야함
// refetch : useQuery에서 제공하는 함수 / api 새롭게 호출
export const useProductQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
    retry: 1, // 요청 실패 시 재요청 횟수
    select: (data) => { return data.data }, //데이터 변환 또는 필터링에 사용, 반환되는 데이터의 특정 부분만 선택할 때  data.data 생략 가능 / 필터해서 가지고 오고 싶을 때에는 .filter(() => {})를 붙여서 사용하면 됨
    //gcTime: 15000, // cash의 유지할 시간을 제어하는 옵션, 밀리초 단위
    //staleTime: 10000, // 데이터가 stale(오래된) 상태로 간주되기까지의 시간, fresh를 유지하는 시간, 밀리초 단위 / 캐시를 가지고 있는 시간보다 적게 줘야 캐시에 저장되어 있는 값을 가져올 수 있다. 캐시를 가지고 있는 시간보다 fresh의 상태로 있는 시간이 더 길다면 캐시에 저장되어 있는 값이 남아있지 않으므로 다시 호출 된다.
    //refetchInterval: (data) => {
    //return data.state.dataUpdateCount < 5 ? 3000 : false;
    //}, // 재 요청의 반복, 해당 시간마다 재요청 시 사용 / 밀리초 단위, 함수가 들어갈 수 있다
    refetchOnMount: true, // 컴포넌트가 마운트가 될 때, 데이터를 가져올지의 여부를 제어하는 설정 / false: 처음 한 번만 호출하고 다른 컴포넌트로 이동했다 돌아와도 다시 호츨하지 않고 캐시에 남은 데이터를 사용한다. / always: stale 타입 여부에 관계없이 데이터를 계속 새로 가져오고 싶을 때 사용 
    //refetchOnWindowFocus: true, // 윈도우 화면에 포커스 잡히는 경우 자동으로 새로고침 되게 설정 / 기본값 true / true: 내가 보고 있는 화면에서 다른 페이지로 갔다가 오는 경우 새롭게 api를 요청
    //refetchIntervalInBackground: true, // 창이 비활성화 되어 있는 상태에도 리패치 될 지 결정 // 기본값: false / 밀리초 단위 / 주식, 코인 사이트를 만드는 경우
    enabled: true, // 초기 호출 여부 / 조건부로 쿼리를 실행할 때 / 기본값: true / false: api를 자동 호출 하지 않는다 (컴포넌트에 들어왔을 때에도 data를 가지고 있지 않음)
  });
  
}

// 무조건 참과 거짓만 들어가지 않아도 됨 / 함수 사용 가능 / 조건문, 삼항 연산 가능

// api 호출을 많이 할 수록 캐시는 개별 공간이라 쌓여도 크게 부담은 없지만, 서버에 부담이 될 경우 렉이 걸리고 느려진다

