import { ProjectTagType } from '@/types';

interface Props {
  tag: ProjectTagType;
  onClick: (tag: ProjectTagType) => void;
  isSelected: boolean;
}

export const ProjectTag = ({ tag, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected
    ? 'text-white border-purple-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};