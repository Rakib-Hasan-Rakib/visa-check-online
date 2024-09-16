import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiChatDeleteLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const UploadImage = () => {
  const { register } = useForm();
  const [imageFields, setImageFields] = useState([1]);

  const addImageField = () => {
    setImageFields([...imageFields, imageFields.length + 1]);
  };

  const removeImageField = (index) => {
    const newFields = imageFields.filter((_, i) => i !== index);
    setImageFields(newFields);
  };

  return (
    <div className="col-span-3 flex items-start gap-4">
      <div className="grid lg:grid-cols-2 lg:gap-8">
        {imageFields.map((_, index) => (
          <div key={index} className="relative">
            <label htmlFor={`image_${index}`} className="md:text-lg">
              Upload Image {index + 1}
            </label>
            <input
              type="file"
              accept="image/*"
              id={`image_${index}`}
              {...register(`image_${index}`, { required: true })}
              className="input-box"
            />
            {imageFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeImageField(index)}
                className="absolute top-3 -right-4"
              >
                <RiChatDeleteLine size={24} className="text-red-600" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="basis-1/5 w-full mt-7 mx-auto">
        <button
          type="button"
          onClick={addImageField}
          className="btn_one flex gap-2 items-center"
        >
          <FaPlus /> Add Another Image
        </button>
      </div>
    </div>
  );
};
export default UploadImage;
