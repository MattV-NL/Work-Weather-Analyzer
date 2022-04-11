import './inputs.scss';
import WorkButton from './WorkButton';
import { useState } from 'react';
import Button from './Button';

const WorkInput = () => {

    const [isOutside, setIsOutside] = useState(false);

    const switchIsOutside = () => {
        setIsOutside(!isOutside);
    }

  return (
    <div className='work-form-div'>
        <form className='work-form'>
            <div className='work-form-labels'>
                <label
                    className='work-form-label'
                    htmlFor="work-type">
                        Type of Work
                </label>
                <label 
                    className='work-form-label' 
                    htmlFor="work-duration">
                        Date
                </label>
                <label 
                    className='work-form-label' 
                    htmlFor="work-location-checkbox">
                        Will there be welding involved?
                </label>
                <label 
                    className='work-form-label' 
                    htmlFor="work-location-checkbox">
                        Will you need crane support?
                </label>
                <label 
                    className='work-form-label' 
                    htmlFor="work-location">
                        Location
                </label>
            </div>
            <div className='work-form-inputs'>
                <input 
                    className='work-form-input' 
                    type="text"
                    placeholder='Type of work'
                    required
                />
                <input 
                    className='work-form-input' 
                    type="date"
                    required
                    
                />
                <input 
                    className='work-form-input' 
                    type="checkbox"
                    
                />
                <input 
                    className='work-form-input' 
                    type="checkbox"
                    
                />
                <Button handleClick={switchIsOutside} name={isOutside ? "Outside" : "Inside"} />
            </div>    
        </form>
        <WorkButton />
    </div>
  )
}

export default WorkInput
