import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  prefectureList: {
    PrefectureCode: string;
    Prefecture: string;
    selected: boolean;
  }[];
  handleCheckBoxChange: (event) => void;
};

const PrefectureCheckBox: React.FC<Props> = ({
  prefectureList,
  handleCheckBoxChange,
}) => {
  return (
    <div>
      <FormGroup row>
        {prefectureList.map((prefecture) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={prefecture.selected}
                  onChange={handleCheckBoxChange}
                  name={prefecture.PrefectureCode}
                />
              }
              label={prefecture.Prefecture}
              key={prefecture.PrefectureCode}
            />
          );
        })}
      </FormGroup>
    </div>
  );
};

export default PrefectureCheckBox;
