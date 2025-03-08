import { useState } from 'react';
import { Send } from 'lucide-react';
import { Dialog } from '@headlessui/react';

export function SubHeader() {
  const [input, setInput] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setDialogContent(input);
      setIsDialogOpen(true);
      setInput('');
    }
  };

  return (
    <div className="sub-header">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="openwebui-container">
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <input
              type="text"
              placeholder="Ask OpenWebUI anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="openwebui-input"
            />
            <button type="submit" className="openwebui-button">
              <Send className="h-4 w-4 mr-2" />
              Execute
            </button>
          </form>
        </div>

        {/* Modal Dialog using Headless UI */}
        <Dialog 
          open={isDialogOpen} 
          onClose={() => setIsDialogOpen(false)}
          className="relative z-50"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl">
              <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-gray-100">
                OpenWebUI Response
              </Dialog.Title>
              
              <div className="mt-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
                  <p className="text-sm text-gray-800 dark:text-gray-200">{dialogContent}</p>
                  <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                    This is a placeholder for the OpenWebUI response. In a real implementation, 
                    this would connect to the OpenWebUI API and display the actual response.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}