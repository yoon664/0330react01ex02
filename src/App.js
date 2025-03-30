import "./App.css";

// 부모 컴포넌트
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">To-Do 리스트</h1>
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="할 일을 입력하세요"
              className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              추가
            </button>
          </div>
          <ul>
            {/* li는 따로 TodoItem이라는 자식 컴포넌트를 만들어서 관리해주세요. */}
            <li className="bg-white shadow-md rounded-lg px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-gray-100">
              <span>여기에 입력한 값을 넣어주세요</span>
              <button className="text-red-500 hover:text-red-700">삭제</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// 자식 컴포넌트
function TodoItem() {}

export default App;
