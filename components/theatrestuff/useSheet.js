import { getProject } from '@theatre/core';
import studio from '@theatre/studio';
import { useState, useEffect } from 'react';
import useTheatre from './useTheatre';

export default function useSheet({ projectName, sheetName }) {
  const { project, studio } = useTheatre(projectName);
  const sheet = proj.sheet(sheetName || 'Scene');
  return { project, studio, sheet };
}
