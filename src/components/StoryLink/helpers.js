const onSelectGen = ( id, props ) => {
  if ( typeof props.onSelect === 'function' ) {
    return () => props.onSelect( id );
  }

  return () => {};
};

export { onSelectGen };
