import { Modal } from '@mantine/core';
import EnquiryForm from './EnquiryForm';

const MIDNIGHT = '#0d1b33';

type EnquiryModalProps = {
  opened: boolean;
  onClose: () => void;
};

export default function EnquiryModal({ opened, onClose }: EnquiryModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Begin Your Journey"
      centered
      size="lg"
      padding="2.5rem"
      styles={{
        content: {
          backgroundColor: MIDNIGHT,
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        header: {
          backgroundColor: MIDNIGHT,
        },
        title: {
          fontFamily: 'var(--font-headline)',
          fontSize: '1.5rem',
          color: '#fff',
        },
        close: {
          color: 'var(--color-on-surface-variant)',
        },
        body: {
          paddingTop: '0.5rem',
        },
      }}
      overlayProps={{
        color: MIDNIGHT,
        backgroundOpacity: 0.85,
        blur: 6,
      }}
    >
      <p style={{ marginBottom: '1.5rem', color: 'var(--color-on-surface-variant)' }}>
        Our concierge team is standing by to curate your next expedition. Provide your details, and
        a specialist will contact you within 24 hours.
      </p>
      <EnquiryForm bare />
    </Modal>
  );
}
