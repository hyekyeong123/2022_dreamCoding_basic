// useReducer 사용해보기
export default function personReducer(person, action){
  switch (action.type){

    case 'update':{
      const {oldName, newName} = action;
      return{
        ...person,
        mentors: person.mentors.map((mentor) => {
          if(mentor.name === oldName ){
            return {
              ...mentor,
              name : newName
            }
          }
          return mentor;
        })
      }
    }

    case 'add':{
      const {newName, newTitle} = action;
      const newMentors = {
        name : newName,
        title : newTitle
      }
      return {
        ...person,
        mentors: [...person.mentors, newMentors]
      }
    }

    case 'delete':{
      return {
        ...person,
          mentors: person.mentors.filter(n => n.name !== action.removeName)
      }
    }

    default : {
      throw Error(`알 수 없는 액션 타입입니다. : ${action.type}`);
    }
  }
}