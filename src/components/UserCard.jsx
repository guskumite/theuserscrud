//to show each user card

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className="rounded-md bg-slate-100 h-auto w-auto overflow-auto flex flex-col">
      <h3 className="px-4 py-5 text-sm font-semibold text-center">
        {user.first_name} {user.last_name}
      </h3>
      <section className="flex flex-col gap-1 px-[1rem] py-2">
        <div>
          <p className="text-xs text-gray-400">Email</p>
          <p className="text-xs">{user.email}</p>
        </div>
        <div>
          <p className="text-xs  text-gray-400 ">Birthday</p>
          <p className="text-xs flex items-center">
            <i className="bx bxs-gift text-xs"></i>
            {user.birthday}
          </p>
        </div>
      </section>
      <div className="flex justify-center gap-3 border-t-2 pt-2">
        <button
          className=" bg-red-600 rounded-md text-white p-2 text-lg  hover:bg-red-400 transition-colors
           hover:animate-pulse"
          onClick={() => deleteUser(user.id)}
        >
          <iconify-icon icon="bx:trash"></iconify-icon>
        </button>
        <button
          className=" bg-[cyan] rounded-md text-white p-2 hover:bg-[#333] transition-colors hover:animate-pulse"
          onClick={() => handleClickEdit(user)}
        >
          <iconify-icon icon="bx:edit"></iconify-icon>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
