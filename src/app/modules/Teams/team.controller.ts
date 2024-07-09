import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { teamService } from './team.service';

const getTeams: RequestHandler = catchAsync(async (req, res) => {
  const data = await teamService.getTeamDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Categorie retrieved successfully',
    data,
  });
});

export const teamController = {
  getTeams
};
