import { useForm } from 'react-hook-form';
import { passwordIndicator } from '@/utils/passwordIndicator';
import PasswordProgressBar from '@/components/PasswordProgressBar/PasswordProgressBar';


export default function Home() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col items-center p-24 lg:w-1/2 md:w-full sm:w-full">
            <form onSubmit={handleSubmit(onSubmit)} className='w-full sm:w'>
              <div className='mb-8 '>
                  <input type='password' {...register("password", { required: true })} className='w-full border border-slate-200 bg-white p-3 rounded-md !ring-transparent placeholder:text-slate-200 ' />
                  {errors.password && <span>This field is required</span>}
              </div>
              <PasswordProgressBar passwordInputValue={watch('password')} />
              <button disabled={passwordIndicator(watch('password')) > 5 ? false : true} type="submit" className="bg-black text-white rounded-md px-4 py-2 disabled:disabled:bg-slate-400"> submit</button>
            </form>
    </div>
  )
}
