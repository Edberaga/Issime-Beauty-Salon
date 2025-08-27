import { describe, test, beforeEach, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhatsAppButton from '../buttons/WhatsAppButton';

// Mock window.open
const mockOpen = vi.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockOpen,
});

describe('WhatsAppButton Component', () => {
  beforeEach(() => {
    mockOpen.mockClear();
  });

  test('renders WhatsApp button', () => {
    render(<WhatsAppButton />);
    const button = screen.getByLabelText('Contact Issime Beauty Salon via WhatsApp');
    expect(button).toBeInTheDocument();
  });

  test('has correct WhatsApp link', () => {
    render(<WhatsAppButton />);
    const link = screen.getByLabelText('Contact Issime Beauty Salon via WhatsApp');
    expect(link).toHaveAttribute('href', 'https://wa.link/wg0gmt');
  });

  test('opens in new tab', () => {
    render(<WhatsAppButton />);
    const link = screen.getByLabelText('Contact Issime Beauty Salon via WhatsApp');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('has proper styling classes', () => {
    render(<WhatsAppButton />);
    const link = screen.getByLabelText('Contact Issime Beauty Salon via WhatsApp');
    expect(link).toHaveClass('bg-green-500');
    expect(link).toHaveClass('hover:bg-green-600');
    expect(link).toHaveClass('rounded-full');
  });

  test('contains WhatsApp icon', () => {
    render(<WhatsAppButton />);
    const icon = screen.getByLabelText('Contact Issime Beauty Salon via WhatsApp').querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});