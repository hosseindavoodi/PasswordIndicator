import {  useMemo } from 'react'
import { 
  passwordIndicator, 
  hasMinCharacters, 
  hasNumber, 
  hasUppercaseLetter
   } from '@/utils/passwordIndicator'
import clsx from 'clsx'

const PasswordProgressBar = ({passwordInputValue}: any ) => {

  const passwordScore = passwordIndicator(passwordInputValue)
 
  const progressBarItems = [
    {
      id: 1,
      item: hasMinCharacters(passwordInputValue),
      text: 'Has to be at least 5 characters long'
    },
    { id: 2, item: hasNumber(passwordInputValue), text: 'Has at least 1 number' },
    {
      id: 3,
      item: hasUppercaseLetter(passwordInputValue),
      text: 'Has at least 1 uppercase letter'
    }
  ]


  const none = 'Empty password'
  const basic = 'Weak password'
  const mid = 'Weak password'
  const sufficient = 'Sufficient password'
  const strong = 'Strong password'
  const allStar = 'Very Strong password'

  const { barText, textColor, barWidth, bgColor } = useMemo(() => {
    let bgColor
    let textColor
    let barWidth
    let barText

    switch (passwordScore) {
      case 0:
        bgColor = 'bg-slate-400'
        textColor = 'text-slate-400'
        barWidth = 'w-6'
        barText = none
        break
      case 1:
        bgColor = 'bg-slate-400'
        textColor = 'text-slate-400'
        barWidth = 'w-1/6'
        barText = basic
        break
      case 2:
        bgColor = 'bg-slate-400'
        textColor = 'text-slate-400'
        barWidth = 'w-1/4'
        barText = mid
        break
      case 3:
        bgColor = 'bg-orange-500'
        textColor = 'text-orange-500'
        barWidth = 'w-1/2'
        barText = sufficient
        break
      case 4:
        bgColor = 'bg-orange-500'
        textColor = 'text-orange-500'
        barWidth = 'w-7/12'
        barText = sufficient
        break
      case 5:
        bgColor = 'bg-green-500'
        textColor = 'text-green-500'
        barWidth = 'w-8/12'
        barText = sufficient
        break
      case 6:
        bgColor = 'bg-green-500'
        textColor = 'text-green-500'
        barWidth = 'w-8/12'
        barText = strong
        break
      case 7:
        bgColor = 'bg-green-500'
        textColor = 'text-green-500'
        barWidth = 'w-10/12'
        barText = strong
        break
      case 8:
        bgColor = 'bg-green-500'
        textColor = 'text-green-500'
        barWidth = 'w-11/12'
        barText = allStar
        break
      case 9:
          bgColor = 'bg-green-500'
          textColor = 'text-green-500'
          barWidth = 'w-full'
          barText = allStar 
        break
    }
    return { barText, textColor, barWidth, bgColor }
  }, [passwordScore, none, basic, mid, sufficient, strong, allStar])

  return (
    <div className="col-span-1 xs:col-span-2">
      <div className="w-full bg-slate-200 rounded-full h-6">
        <div
          className={`h-full rounded-full transition-width duration-500 ease-in-out ${barWidth} ${bgColor}`}
        ></div>
      </div>
      <p className={`mt-2 mb-8 ${textColor}`}>{barText}</p>
      <ul>
        {progressBarItems.map(items => (
          <li
            key={items.id}
            className={clsx(
              'flex mb-4 items-center',
              items.item ? 'text-green-500' : 'text-slate-600'
            )}
          >
            <p>{items.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PasswordProgressBar
