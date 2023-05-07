import { useForm } from 'react-hook-form';
import PasswordProgressBar from './components/PasswordProgressBar/PasswordProgressBar';

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type='password' {...register("example")} className='w-full border border-slate-200 bg-white p-3 mb-8 rounded-md !ring-transparent placeholder:text-slate-200 ' />
              {errors.exampleRequired && <span>This field is required</span>}

              <PasswordProgressBar />
              <button type="submit" className='bg-black text-white rounded-md px-4 py-2'> submit</button>

            </form>
              
            </div>
          
    </div>
  )
}
