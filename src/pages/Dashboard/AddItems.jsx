import { useForm } from "react-hook-form";
import SectionTitle from "../../components/Home/SectionTitle";
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_KEY;
const imgApiUrl = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const image = { image: data.image[0] };
    const response = await axios.post(imgApiUrl, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response);
  };
  return (
    <section className="add-items-page">
      <SectionTitle subHeading="What's New?" heading="add an item" />
      <div className="mx-auto rounded bg-base-200 p-4 shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="recipeName"
            >
              Recipe name*
            </label>
            <input
              type="text"
              id="recipeName"
              {...register("recipe-name")}
              className="input input-bordered w-full"
              placeholder="Recipe name"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-5">
            <div className="category">
              <label
                className="mb-2 block text-sm font-medium"
                htmlFor="category"
              >
                Category*
              </label>
              <select
                className="select select-bordered w-full"
                {...register("category")}
              >
                <option selected>select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="">
              <label className="mb-2 block text-sm font-medium" htmlFor="price">
                Price*
              </label>
              <input
                type="number"
                id="price"
                className="input input-bordered w-full"
                placeholder="Price"
                required
                {...register("price")}
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="recipeDetails"
            >
              Recipe Details*
            </label>
            <textarea
              id="recipeDetails"
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
              required
              {...register("recipe-details")}
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium" htmlFor="file">
              Choose File
            </label>
            <input
              type="file"
              id="file"
              className="file-input file-input-bordered w-full"
              {...register("image")}
            />
          </div>

          <button type="submit" className="btn btn-neutral">
            Add Item 🍴
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
