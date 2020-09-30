import React from 'react';
import Radio from '@material-ui/core/Radio';

type Props = {
  handleRadioButtonChange: (event) => void;
  radioButtonLabelList: { name: string; id: string; selected: boolean }[];
};

const RadioButtonList: React.FC<Props> = ({
  handleRadioButtonChange,
  radioButtonLabelList,
}) => {
  return (
    <>
      {radioButtonLabelList.map((radioButtonLabel) => {
        return (
          <div key={radioButtonLabel.id}>
            <Radio
              checked={radioButtonLabel.selected}
              onChange={handleRadioButtonChange}
              value={radioButtonLabel.id}
            />
            {radioButtonLabel.name}
          </div>
        );
      })}
    </>
  );
};

export default RadioButtonList;
