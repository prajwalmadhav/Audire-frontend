import React, { useCallback, useState } from 'react'
import '@natscale/react-calendar/dist/main.css';

import { Calendar } from '@natscale/react-calendar';

export default function Test() {
  const [value, setValue] = useState();

  const onChange = useCallback(
    (value) => {
      setValue(value);
    },
    [setValue],
  );

  return (
    <div>
      <Calendar value={value} onChange={onChange} />
    </div>
  );
}