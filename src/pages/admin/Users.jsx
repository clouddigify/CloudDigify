import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Stack,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { formatCurrency } from '../../utils/formatters';

const INITIAL_MEMBERS = [
  {
    id: 1,
    name: 'Manish',
    email: 'manish@example.com',
    role: 'Admin',
    totalContributions: 25000,
    totalExpenses: 1500,
    joinedDate: '2024-01-01'
  },
  {
    id: 2,
    name: 'Chirag',
    email: 'chirag@example.com',
    role: 'Member',
    totalContributions: 25000,
    totalExpenses: 3000,
    joinedDate: '2024-01-01'
  },
  {
    id: 3,
    name: 'Deepak',
    email: 'deepak@example.com',
    role: 'Member',
    totalContributions: 25000,
    totalExpenses: 2400,
    joinedDate: '2024-01-01'
  }
];

const Users = () => {
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleAddMember = () => {
    setSelectedMember(null);
    setDialogOpen(true);
  };

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const handleDeleteMember = (member) => {
    setSelectedMember(member);
    setDeleteDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedMember(null);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
    setSelectedMember(null);
  };

  const handleSaveMember = (event) => {
    event.preventDefault();
    // Implement save logic
    handleDialogClose();
  };

  const handleConfirmDelete = () => {
    // Implement delete logic
    handleDeleteDialogClose();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">User Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddMember}
        >
          Add Member
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Member</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Total Contributions</TableCell>
              <TableCell align="right">Total Expenses</TableCell>
              <TableCell align="right">Net Position</TableCell>
              <TableCell>Joined Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar>{member.name[0]}</Avatar>
                    <Box>
                      <Typography variant="subtitle2">{member.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {member.email}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip 
                    label={member.role}
                    color={member.role === 'Admin' ? 'primary' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(member.totalContributions)}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(member.totalExpenses)}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(member.totalContributions - member.totalExpenses)}
                </TableCell>
                <TableCell>
                  {new Date(member.joinedDate).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    size="small"
                    onClick={() => handleEditMember(member)}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteMember(member)}
                    color="error"
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Member Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <form onSubmit={handleSaveMember}>
          <DialogTitle>
            {selectedMember ? 'Edit Member' : 'Add New Member'}
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="Name"
                fullWidth
                required
                defaultValue={selectedMember?.name}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                defaultValue={selectedMember?.email}
              />
              <TextField
                select
                label="Role"
                fullWidth
                required
                defaultValue={selectedMember?.role || 'Member'}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Member">Member</MenuItem>
              </TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {selectedMember ? 'Save Changes' : 'Add Member'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to remove {selectedMember?.name} from the system?
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Users; 