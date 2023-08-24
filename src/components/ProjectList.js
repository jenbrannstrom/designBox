// src/components/ProjectList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <h1>{t('yourProjects')}</h1>
      <Table className="projects-table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t('customerName')}</TableCell>
            <TableCell>{t('projectType')}</TableCell>
            <TableCell>{t('interviewCompleted')}</TableCell>
            <TableCell>{t('pdfSent')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Michael Fishman</TableCell>
            <TableCell>{t('home')}</TableCell>
            <TableCell>✓</TableCell>
            <TableCell>✓</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Claude.ai Israel Office</TableCell>
            <TableCell>{t('office')}</TableCell>
            <TableCell>✓</TableCell>
            <TableCell>✓</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={() => navigate('/home-project')}>{t('newHomeProject')}</Button>
        <Button variant="contained" color="primary" onClick={() => navigate('/office-project')}>{t('newOfficeProject')}</Button>
      </div>
    </TableContainer>
  );
};

export default Projects;
