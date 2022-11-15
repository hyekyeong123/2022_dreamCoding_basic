import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);
// ******************************************
  // 함수를 매번 생성하지 않음(useCallback)
  const handleUpdate = useCallback(() => {
    const oldName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const newName = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'update', oldName, newName });
  }, []);

  const handleAdd = useCallback(() => {
    const newName = prompt(`멘토의 이름은?`);
    const newTitle = prompt(`멘토의 직함은?`);
    dispatch({ type: 'add', newName, newTitle });
  }, []);

  const handleDelete = useCallback(() => {
    const removeName = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'delete', removeName });
  }, []);
// ******************************************
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='삭제하기' onClick={handleDelete} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
    </div>
  );
}
// ******************************************
// props가 매번 변경이 된다고 해도 값이 동일하다면 리렌더링 되지 않게 도와줌(memo)
const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering 😜');

  // 매번 계산하는 것이 아니라 처음 한번만 계산하게 하기 위해 useMemo 사용함
  // 그래도 이것만 사용한다면 앱 컴포넌트 전체가 바뀔때마다 호출됨
  const result = useMemo(() => calculateSomething(), []);

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});
// ******************************************
function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😆');
  }
  return 10;
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
