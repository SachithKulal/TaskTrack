export const Input = ({ label, textarea, ref, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-800 focus:bg-stone-50";
  return (
    <p className="flex flex-col gap-2 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} ref={ref} />
      ) : (
        <input className={classes} ref={ref} {...props} />
      )}
    </p>
  );
};
