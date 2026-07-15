import { Button, Textarea, TextInput } from '@mantine/core';
import { useState, type FormEvent } from 'react';

const inputClassNames = {
  label: 'text-[10px] font-bold tracking-widest uppercase text-primary mb-2',
  input:
    'rounded-none border-0 border-b border-outline/30 bg-transparent px-0 text-white focus:border-primary',
};

const textareaClassNames = {
  label: 'text-[10px] font-bold tracking-widest uppercase text-primary mb-2',
  input:
    'rounded-none border border-outline/30 bg-transparent px-3 py-2 text-white focus:border-primary',
};

type EnquiryFormProps = {
  bare?: boolean;
};

export default function EnquiryForm({ bare = false }: EnquiryFormProps) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // ponytail: no backend — demo capture only
    console.log('enquiry', Object.fromEntries(data));
    setSent(true);
  }

  const shellClass = bare
    ? 'space-y-8'
    : 'space-y-8 border border-white/5 bg-surface-container-highest p-8 shadow-2xl md:p-12';

  if (sent) {
    return (
      <p
        className={`${bare ? '' : 'border border-white/5 bg-surface-container-highest p-12'} font-headline text-xl text-primary`}
        role="status"
      >
        Thank you. A Go Bespoke specialist will be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={shellClass}>
      <TextInput
        name="name"
        label="Full Name"
        required
        autoComplete="name"
        classNames={inputClassNames}
      />
      <TextInput
        name="email"
        type="email"
        label="Email Address"
        required
        autoComplete="email"
        classNames={inputClassNames}
      />
      <TextInput
        name="telephone"
        type="tel"
        label="Telephone Number"
        required
        autoComplete="tel"
        classNames={inputClassNames}
      />
      <Textarea
        name="enquiry"
        label="Enquiry Specifications (optional)"
        placeholder="Please add any details that may help us assist with your enquiry"
        autosize
        minRows={4}
        classNames={textareaClassNames}
      />
      <Button
        type="submit"
        unstyled
        className="w-full bg-primary py-5 text-[12px] font-bold tracking-[0.2em] text-on-primary uppercase transition-all duration-300 hover:brightness-110"
      >
        Submit Inquiry
      </Button>
    </form>
  );
}
