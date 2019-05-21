export class ErrorMessageConstants {

//  Login Component
    public static EnterUserName = 'Please enter username';
    public static ClosePopup = 'Please close popup to continue';
    public static EnterMeetingId = 'Please enter Meeting Id';
    public static EnterFullName = 'Please enter Full Name ';
    public static EnterAlphabatesOnly = 'Please enter alphabatss only ';
    public static EnterPassword = 'Please enter Password';
    public static ValidUserName = 'Please enter valid username';
    public static ValidPassword = 'Please enter valid password';
    public static DeactivateAccount = 'Your account has deactivated , please contact to your administrator';
    public static TokenFailure = 'Authentication Token failed';
    public static ValidMeetingId = 'Please enter valid Meeting Id';
    public static RegisterEmail = 'Email id is not registered, enter registered email id';

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
    public static Email = 'Please enater email';
    public static FileNotSupported = 'File not supported, please select image below 700KB.';
    public static InvalidImgFormat = 'Invalid Image format';
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

//  Myprofile Component
    public static UpdateProfile = 'User profile has been updated successfully';

//  Notification Component
    public static AddUser = 'User has been added successfully';

// Dashboard Component
   public static broadcastMsg = 'Message has been broadcast successfully';;
}

export class StaticLabels {
    public static TimezoneLbl = 'Select Timezone';
    public static DurationLbl = 'Select Duration';
    public static AccountAuth = 'Account Authentication';
    public static InvalidData = 'Invalid Data';
    public static Undefined = 'undefined';
}
