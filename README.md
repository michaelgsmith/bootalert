# bootalert
An alerting system for use in XPage applications that utilize Bootstrap & jQuery.  If your application uses FontAwesome then icons can be incorporated into the alerts.

## Getting Started


1. Add bootalert.js to your project and make sure it's included as a page resource or as part of your theme.
2. Copy the source of ccBootAlert into a new custom control.
3. Add the custom control to any XPages where you need to generate alerts.
4. Repeat for the the other custom controls included if you want to utilize their functionality in your application.

### Included Files
<table>
  <tr>
    <td>bootAlert.js</td>
    <td>Contains all of the client side code that interacts with each custom control below.</td>
  </tr>
  <tr>
    <td>ccBootAlert</td>
    <td>A custom control that contains the markup and server side hooks to the alerting system.</td>
  </tr>
  <tr>
    <td>ccModalClientSideConfirm</td>
    <td>A custom control that contains a Bootstrap modal with a Yes and No button.</td>
  </tr>
  <tr>
    <td>ccPopupOverlay</td>
    <td>A custom control that provides an overlay for the screen to communicate to the user there is an action taking place.</td>
  </tr>
 </table>

### Options
<table>
  <tr>
    <td><code>title</code></td>
    <td>string</td>
    <td>Appears as bolded text.  Used to convey the alert summary.</td>
  </tr>
  <tr>
    <td><code>body</code></td>
    <td>string</td>
    <td>Appears as normal text.  Used to convey the alert detail.</td>
  </tr>
  <tr>
    <td><code>alertType</code></td>
    <td>string</td>
    <td>This value determines the color scheme of the alert based on the Bootstrap classes.  Valid values are <code>warning</code>, <code>danger</code>, <code>success</code>, <code>info</code>, and <code>default</code>.</td>
  </tr>
  <tr>
    <td><code>alertIcon</code></td>
    <td>string</td>
    <td>If FontAwesome is available of a resource, a FA icon class can be specified here.  FA sizing icons can be added as well.  For example <code>fa-check-circle-o fa-lg</code></td>
  </tr>
  <tr>
    <td><code>growl</code></td>
    <td>boolean</td>
    <td>If set to <code>true</code>, the alert will pop up in the right hand corner.</td>
  </tr>
  <tr>
    <td><code>autoClose</code></td>
    <td>boolean</td>
    <td>If set to <code>true</code>, the alert will auto hide after a specified amount of time.  Default is <code>false</code>.</td>
  </tr> 
  <tr>
    <td><code>closeInterval</code></td>
    <td>number</td>
    <td>Determines how long (in ms) an alert will be visible before auto closing.  Default is <code>3000</code> and <code>autoClose</code> must be set to <code>true</code>.</td>
  </tr>
  <tr>
    <td><code>clickToClose</code></td>
    <td>boolean</td>
    <td>If set to <code>true</code>, then clicking any portion of the alert will close it.  If set to <code>false</code>, the alert can only be manually closed by clicking the x in the top right corner.  Defaults to <code>true</code></td>
  </tr>
 </table>
