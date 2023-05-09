import VisitForm from "../components/VisitForm"
import VisitCard from "../components/VisitCard";

const Profile = ({ user }) => {


  // useEffect(() => {
  //   fetch("/profile").then((resp) => {
  //     if (resp.ok) {
  //       resp.json().then((newUser) => {
  //         setUser(newUser);
  //       });
  //     }
  //   });
  // }, []);

  if (!user) return <div>loading..</div>

  const displayUserVisits = user.visits.map((visit) => (
    <VisitCard key={visit.id} visit={visit} />
  ));

  return (
    <div>
      <img src={user.avatar} alt="avatar" />
      <h2>{user.username}</h2>
      <h3>{user.tagline}</h3>
      <div>{displayUserVisits}</div>
      Pofile displays my visits and my favorites, my avatar I can see and edit
      everything, others can not view this page but they can see my visits on
      the board and truck page
      <button>New Post</button>
      <VisitForm />
    </div>
  );
}

export default Profile