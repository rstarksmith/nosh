import VisitList from "../components/VisitList"
import VisitForm from "../components/VisitForm"

const Profile = () => {

  // useEffect(() => {
  //   fetch("/profile").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((newUser) => {
  //         setUser(newUser);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <img src="" alt=""/>
        Pofile displays my visits and my favorites, my avatar
        I can see and edit everything, others can not view this page
        but they can see my visits on the board and truck page
        <button>New Post</button>
        <VisitList />
        <VisitForm />
    </div>
  )
}

export default Profile