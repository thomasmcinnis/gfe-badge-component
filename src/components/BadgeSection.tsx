import BadgeComponent from './BadgeComponent.tsx';
type BadgeSize = 'small' | 'medium' | 'large';
type BadgeRole = 'neutral' | 'error' | 'warning' | 'success' | 'brand';

const badgeSizes: BadgeSize[] = ['small', 'medium', 'large'];
const badgeRoles: BadgeRole[] = [
  'neutral',
  'error',
  'warning',
  'success',
  'brand',
];

interface BadgeRowProps {
  role: BadgeRole;
}

function BadgeRow({ role }: BadgeRowProps) {
  return (
    <div className="flex gap-6 items-start">
      {badgeSizes.map((size) => (
        <BadgeComponent size={size} role={role} key={`${size}-${role}`}>
          Label
        </BadgeComponent>
      ))}
    </div>
  );
}

export default function BadgeSection() {
  return (
    <div className="flex flex-col w-[240px] gap-6">
      {badgeRoles.map((role) => (
        <BadgeRow role={role} key={role} />
      ))}
    </div>
  );
}
