import { getProject } from '@theatre/core';
import studio from '@theatre/studio';
import { useState, useEffect } from 'react';

export default function useTheatre({
  initStudio = false,
  projectName = 'default',
}) {
  const [project, setProject] = useState(null);
  useEffect(() => {
    let proj = getProject(
      // the ID of the project is "My first project"
      'First project'
    );
    setProject(proj);
  }, []);

  useEffect(() => {
    // initialize the studio so the editing tools will show up on the screen
    if (initStudio) {
      console.log('theatre studio initialized');
      studio.initialize();
    }
  }, [initStudio]);

  return { project, studio };
}
