export class ErrorMessageConstants {

//  Login Component
        public static EnterUserName = 'Please enter username';
        public static ClosePopup = 'Please close popup to continue';
        public static EnterMeetingId = 'Please enter Meeting Id';
        public static EnterFullName = 'Please enter Full Name ';
        public static EnterAlphabatesOnly = 'Please enter alphabats only';
        public static EnterPassword = 'Please enter Password';
        public static ValidUserName = 'Please enter valid username';
        public static ValidPassword = 'Please enter valid password';
        public static DeactivateAccount = 'Your account has deactivated , please contact to your administrator';
        public static TokenFailure = 'Authentication Token failed';
        public static ValidMeetingId = 'Please enter valid Meeting Id';
        public static RegisterEmail = 'Email id is not registered, enter registered email id';
        public static ExistUserName = 'Username already exist';
        public static ValidEmail = 'Please enter valid email';

//  Reset Component
        public static EnterConfirmPassword = 'Please enter confirm password';
        public static PasswordMatch = 'Password and  confirm password does not match';

//  Default Meeting Component
        public static SelectFromDate = 'Please select from date.';
        public static SelectToDate = 'Please select to date.';
        public static AttendeeEmail = 'Please enter attendee email id';

//  Schedule Meeting Component
        public static Subject = 'Please enter meeting subject';
        public static Duration = 'Please select meeting duration';
        public static Timezone = 'Please select timezone';
        public static FutureDateTime = 'Please select future meeting date or time';

//  Dashboard Component
        public static EnterMsg = 'Please enter message';

//  My Profile Component
        public static FirstName = 'Please enter first name';
        public static LastName = 'Please enter last name';
        public static Email = 'Please enter email';
        public static FileNotSupported = 'File not supported, please select image below 700KB.';
        public static InvalidImgFormat = 'Invalid Image format';

//  Manage Group Component
        public static GroupName = 'Please enter group name';
        public static AlreadyDeactivatedGroup = 'Selected group has already deactivated';
        public static AlredayDeactivateAndEdit = 'Selected group has deactivated, you can not edit group';
        public static SelectMember = 'Please select members';

//  Manage Team Component
        public static TeamName = 'Please enter team name';
        public static AlreadyTeamDeactivate = 'Selected team has already deactivated';
        public static AlreadyDeactivatedTeamAndEdit = 'Selected team has deactivated, you can not edit team';
        public static AlreadyDeactivateAndAddMember = 'Selected team has deactivated , you can not add member in this team ';

//  Meeting Component
        public static InvalidMeetingCode = 'MeetingCode not present. Kindly contact the host/Admin for valid meeting Code.';
        public static MeetingOver = 'Meeting start time has already elapsed';
        public static EnterMOM = 'No notes has added for this meeting';
        public static GuestViewAttendee =  'Guest user does not have permission for viewing attendees';

// Past Meeting component
        public static NoMom = 'No MOM for this meeting has been added';

//  My-Calendar Component
        public static NoMeetings = 'There are no meetings.';
    }
export class TypeOfError {
        public static Error = 'Error';
        public static Warning = 'Warning';
}

export class SuccessMessage {

//  Login Component
        public static ForgotPasswordEmail = 'Password reset link has successfully sent to your email account, check your email.';

//  Default Meeting Component & Schedule Meeting Component
        public static SuccessHeader = 'Success';
        public static CancelledMeeting = 'Meeting has cancelled';
        public static copyMeetingDetails = 'Meeting Details has been copied. Kindly share via your preferred email id.';
        public static ScheduleMeeting = 'Meeting has scheduled successfully';
        public static MeetingInvitation = 'Meeting invitation has sent successfully';
        public static meetingLinkCopy = 'Meeting link has copied successfully';

//  Myprofile Component
        public static UpdateProfile = 'User profile has updated successfully';

//  Notification Component
        public static AddUser = 'User has added successfully';

// Dashboard Component
        public static broadcastMsg = 'Message has broadcast successfully';

// Manage Admin
        public static AdminUpdate = 'Admin has updated successfully';

// Manage Group
        public static AddGroup = 'Group has added successfully';
        public static DeleteGroup = 'Group has deleted successfully';
        public static UpdateGroup = 'Group has updated successfully';
        public static UpdateMember = 'Members has updated successfully';

// Manage Team Component
        public static SaveTeam = 'Team has saved successfully ';
        public static DeleteTeam = 'Team has deleted successfully';
        public static UpdateTeam = 'Team has updated successfully';
        public static SaveMember = 'Member has saved successfully';

// Meeting Component
        public static DownloadMom = 'File has downloaded.';
        public static EndMeeting = 'Meeting has ended.';
        public static copyMeetingIDDetails = 'Meeting Id copied successfully';

// Setting Component
        public static UserSetting = 'User settings has updated successfully';

// Reset Component
        public static RsetPassword = 'Password reset successfully';
}

export class StaticLabels {
        public static TimezoneLbl = 'Select Timezone';
        public static DurationLbl = 'Select Duration';
        public static AccountAuth = 'Account Authentication';
        public static InvalidData = 'Invalid Data';
        public static Undefined = 'undefined';
        public static Active = 'ACTIVE';
        public static InActive = 'INACTIVE';
        public static Cancel = 'CANCEL';
        public static OverMeeting = 'Meeting Over';
        public static True = 'true';
        public static False = 'false';
        public static UnMute = 'Unmute';
        public static Mute = 'Mute';
        public static VideoOn = 'Video On';
        public static VideoOff = 'Video Off';
}
