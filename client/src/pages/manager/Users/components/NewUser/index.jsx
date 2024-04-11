import styles from "./NewUser.module.css";
import { useNewUser } from "../../context/NewUserContext.jsx";

const NewUser = () => {
  const { handleSubmit } = useNewUser();
  return (
    <div className={styles.sidebar}>
      <h2>{"Add User"}</h2>
      <form
        action="/submit"
        method="post"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <div className={styles.divider}></div>
        <button className={styles.button} type="submit">
          {"Add Clerk"}
        </button>
      </form>
    </div>
  );
};

export default NewUser;
