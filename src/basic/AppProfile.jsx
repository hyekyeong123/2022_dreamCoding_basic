import './basic/css/App.css';
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

export default function AppProfile() {
  const handleClick = (e)=>{
    console.log(e);
    alert("button click");
  }


  return (
    <div className="App">
      <button onClick={handleClick}>버튼</button>
      <Avatar image="https://plus.unsplash.com/premium_photo-1664970900029-1d45e1297a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              isNew={true}
      />
      <Profile image="https://plus.unsplash.com/premium_photo-1664970900029-1d45e1297a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
               name="정혜경"
               title="프론트 엔드 개발자"
               isNew={true}
      />
      <Profile image="https://plus.unsplash.com/premium_photo-1664970900029-1d45e1297a54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
               name="정혜경"
               title="프론트 엔드 개발자"
               isNew={true}
      />
      <Profile image="https://images.unsplash.com/photo-1657214059388-a35554015a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
               name="정우성"
               title="기획자"
               isNew={false}
      />
      <Profile image="https://images.unsplash.com/photo-1657214059189-6bace4ad1ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
             name="루미"
             title="디자이너"
             isNew={false}
      />
    </div>
  );
}

