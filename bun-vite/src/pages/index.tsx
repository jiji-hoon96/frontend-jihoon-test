import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>스타일 없는 아무거나 테스트</h1>
      <button onClick={() => navigate("form")}>
        리엑트훅폼이랑조드가지고놀기
      </button>
      <button onClick={() => navigate("image")}>
        다양한방법으로이미지최적화해보기
      </button>
      <button onClick={() => navigate("key")}>
        리엑트에서키가렌더링에어떤영향을줄까테스트
      </button>
    </div>
  );
};

export default Home;
