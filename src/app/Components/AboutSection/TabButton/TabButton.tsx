import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: '100%' },
};

interface Props {
  active: boolean;
  selectTab: () => void;
  children: string;
}

export const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
      <p className={`font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="h-px bg-primary-500 mt-1"
      />
    </button>
  );
};
