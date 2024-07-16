import { render, screen } from '@testing-library/react';
import BadgeComponent from './BadgeComponent.tsx';

describe('<BadgeComponent />', () => {
  test('renders text content', () => {
    render(
      <BadgeComponent role="neutral" size="medium">
        Label
      </BadgeComponent>,
    );
    const badge = screen.getByText('Label');
    expect(badge).toHaveTextContent('Label');
  });

  test('applies base classes to all badges', () => {
    render(
      <BadgeComponent role="neutral" size="medium">
        Label
      </BadgeComponent>,
    );
    const badge = screen.getByText('Label');
    expect(badge).toHaveClass('border');
    expect(badge).toHaveClass('rounded-full');
  });

  test('applies Tailwind classes for role', () => {
    render(
      <BadgeComponent role="error" size="medium">
        Label
      </BadgeComponent>,
    );
    const badge = screen.getByText('Label');
    expect(badge).toHaveClass('text-red-600');
    expect(badge).toHaveClass('bg-red-50');
    expect(badge).toHaveClass('border-red-200');
  });

  test('applies Tailwind classes for size', () => {
    render(
      <BadgeComponent role="neutral" size="large">
        Label
      </BadgeComponent>,
    );
    const badge = screen.getByText('Label');
    expect(badge).toHaveClass('text-sm');
    expect(badge).toHaveClass('px-2.5');
    expect(badge).toHaveClass('py-1');
  });
});
