import React, { useState, useEffect } from 'react';

function Nomal() {
  
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchProduct = async () => {
    setIsLoading(true)
    const url = "http://localhost:5000/products";
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  }

  useEffect(() => {
    fetchProduct()
  }, []);

  console.log(data)

  if (isLoading) {
    return <h1>..Loading</h1>
  }
  
  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //   .then((response) => response.json())
  //   .then((json) => setData(json))
  //   .catch((error) => console.error("Error:", error))
  // }, []);

  // Fetching : api를 받아옴
  // Fresh (신선) : api를 막 받아왔을 때 > 굳이 api 호출을 한 번 더 할 필요 없으니 api 통제를 해야한다 > cash
  // Fresh에서 유통기한이 지났을 때 Stale 상태로 들어감
  // Statle : (유통기한이 끝난 상태) 데이터가 도착해서 어느정도의 시간이 지났을 때 들어오는 값
  // Inactive : 모든 api 상태가 다 끝났을 때 
  // Deleted : 삭제
  
  // Deleted 되지 않고 다른 api를 불러올 때에는 stale에서 다시 fetching 상태로 돌아간다.


  return (
    <div>
      {data?.map(item=>(
        <div key={item.id}>{item.title}</div>
      ))}

      {/* {data && data.lenth > 0 ? (
        data.map(item => <div key={item.id}>{item.title}</div>)
      ) : (
        <p>데이터 없음.</p>
      )} */}

      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "loading..."} */}
    </div>
  );
}

export default Nomal;
