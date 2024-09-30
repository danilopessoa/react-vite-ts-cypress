import React from 'react';

interface FormActionProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  type?: string;
  action?: 'submit' | 'reset' | 'button' | undefined;
  text: string;
}

const FormAction = ({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text,
}: FormActionProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const form = e.currentTarget.closest('form');
    if (form) {
      handleSubmit(
        new Event('submit', {
          bubbles: true,
          cancelable: true,
        }) as unknown as React.FormEvent<HTMLFormElement>
      );
    }
  };

  return (
    <>
      {type === 'Button' ? (
        <button
          type={action}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onClick={handleClick}>
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export { FormAction };
