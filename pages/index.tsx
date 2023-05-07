import { useForm } from 'react-hook-form';
import PasswordProgressBar from '@/components/PasswordProgressBar/PasswordProgressBar';
import clsx from 'clsx';

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type='password' defaultValue={''} {...register("password")} className='w-full border border-slate-200 bg-white p-3 mb-8 rounded-md !ring-transparent placeholder:text-slate-200 ' />
              {errors.exampleRequired && <span>This field is required</span>}

              <PasswordProgressBar passwordInputValue={watch('password')} />
              <button type="submit" className={clsx('bg-black text-white rounded-md px-4 py-2 disabled:bg-slate-400')}> submit</button>

            </form>
              
            </div>
          
    </div>
  )
}
