import { ProjectTagType } from '@/types';
import { motion } from 'framer-motion';

interface Props {
  tag: ProjectTagType;
  onClick: (tag: ProjectTagType) => void;
  isSelected: boolean;
}

export const ProjectTag = ({ tag, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? 'text-white border-primary-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <motion.button
      animate={isSelected ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
      transition={{ duration: 0.1 }}
      className={`${buttonStyles} rounded-xl border-2 px-6 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </motion.button>
  );
};
