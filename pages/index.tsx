import { useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { passwordIndicator } from '@/utils/passwordIndicator';
import PasswordProgressBar from '@/components/PasswordProgressBar/PasswordProgressBar';

const schema = yup.object({
  password: yup.string().min(5).required(),
}).required();

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: any) => {
      if (passwordIndicator(watch("password")) > 4) {
      console.log(data)
    }
  }

  return (
    <div className="flex flex-col items-center p-24 lg:w-1/2 md:w-full sm:w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:w">
        <div className="mb-8 relative ">
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="right-2 -translate-x-1/2 p_highlight flex absolute top-1/2 -translate-y-1/2 text-disabled cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: true
            })}
            className="w-full border border-slate-400 bg-white p-3 pr-12 rounded-md !ring-transparent placeholder:text-slate-200"
          />
          {errors.password && <span> Add at least 5 characters </span>}
        </div>
        <PasswordProgressBar passwordInputValue={watch("password")} />
        <button
          disabled={passwordIndicator(watch("password")) > 4 ? false : true}
          type="submit"
          className="bg-black text-white rounded-md px-4 py-2 disabled:disabled:bg-slate-400"
        >
          submit
        </button>
      </form>
    </div>
  );
}
