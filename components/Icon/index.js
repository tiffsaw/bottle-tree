import React, { useMemo } from 'react';

export default function IconComponent(props) {
  const Icon = useMemo(() => require(`./${props.icon}`).default, [props.icon]);
  const { icon, circle, ...other } = props;

  return circle ? (
    <span className={circle}>
      <Icon {...other} />
    </span>
  ) : (
      <Icon {...other} />
    );
}
