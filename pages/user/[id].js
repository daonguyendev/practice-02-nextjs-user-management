import { useRouter } from "next/router";

const UserDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>User Information</h2>
      <p>UserId: {id}</p>
    </div>
  );
};

export default UserDetail;