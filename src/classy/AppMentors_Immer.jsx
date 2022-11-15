import React, {useState} from 'react';
import {useImmer} from "use-immer";

// useState 버전
export default function AppMentors_Immer() {
  const [person, updatePerson] = useImmer(initialPerson);
// ******************************************
  function changeMentor() {
    const oldName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const newName = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    updatePerson(p => {
      const mentor = p.mentors.find(m => m.name === oldName);
      mentor.name = newName;
    })
  }

  // 멘토 삭제하기
  const removeMentor = () => {
    const removeName = prompt(`어떤 멘토를 삭제할건가요?`);
    updatePerson(p => {
      p.mentors = p.mentors.filter(m => m.name !== removeName)
    })
  }

  // 멘토 추가하기
  const addMentor = () => {
    const newName = prompt(`추가하고 싶은 멘토의 이름은 무엇인가요?`);
    const newTitle = prompt(`그 멘토의 title은 무엇인가요?`);
    const newMentors = {
      name : newName,
      title : newTitle
    }
    updatePerson(p => {
      p.mentors.push(newMentors);
    })

  }
  // ******************************************
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <ul>
        {
          person.mentors.map((mentor, index) => (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          ))
        }
      </ul>
      <button onClick={changeMentor}>멘토 수정하기</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={removeMentor}>멘토 삭제하기</button>
    </div>
  );
};
// ******************************************
const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: 'bob',
      title: '시니어 개발자'
    },
    {
      name: 'james',
      title: '시니어 개발자'
    }
  ],
}