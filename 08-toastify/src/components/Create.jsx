import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    console.log(data);

    const copyTodos = [...todos];
    copyTodos.push(data);
    setTodos(copyTodos);

    toast.success('Todo Created!')

    reset();
  };

  return (
    <div className="w-[60%] p-10 mx-auto">
      <h1 className="mb-10 text-5xl font-thin">
        Set <span className="text-red-400">Remainder</span> for <br /> Tasks
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "Title cannot be empty" })}
          className="border-b w-full outline-0 text-2xl font-thin p-2"
          type="text"
          placeholder="Enter the task"
        />
        {errors && errors.title && errors.title.message && (
          <small className="text-red-400 text-xl">{errors.title.message}</small>
        )}

        {/* {errors?.title?.message} */}

        <br />
        <br />
        <button className="px-10 py-2 text-xl border rounded mt-5">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
