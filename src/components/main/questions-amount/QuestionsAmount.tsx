import React from 'react';
import { IProps } from './IQuestionsAmount';
import { ReactComponent as AmountIcon } from '../../../assets/amount.svg'
import './QuestionsAmount.css';

const QuestionsAmount: React.FC<IProps> = (props) => {
    const {
        questionAmount,
        handleAmountChange
    } = props


    return (
        <div className='amount__wrapper'>
            <div className='amount__header'>
                <AmountIcon />
                <p className='amount__title'>Amount</p>
            </div>

            <input value={questionAmount} onChange={handleAmountChange} className='amount__field' />
        </div>
    )
}

export default QuestionsAmount
