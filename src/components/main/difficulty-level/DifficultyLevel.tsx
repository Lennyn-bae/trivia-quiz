import React from 'react';
import { IProps } from './IDifficultyLevel'
import { ReactComponent as DifficultyIcon } from '../../../assets/difficulty.svg';
import './DifficultyLevel.css';

const DifficultyLevel: React.FC<IProps> = (props) => {
    const {
        questionDifficulty,
        handleDifficultyChange
    } = props

    const options = ['easy', 'hard'];

    return (
        <div>
            <div className='level'>
                <DifficultyIcon />
                <p className='level__title'>Difficulty:</p>
            </div>
            <select value={questionDifficulty} onChange={handleDifficultyChange} className='level__field'>
                {
                    options.map((option: any, index: number) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    )
                    )}
            </select>
        </div>
    )
}

export default DifficultyLevel