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
    <td>text</td>
    <td></td>
  </tr>
  <tr>
    <td><code>body</code></td>
    <td>text</td>
    <td></td>
  </tr>
  <tr>
    <td><code>alertType</code></td>
    <td>text</td>
    <td></td>
  </tr>
  <tr>
    <td><code>alertIcon</code></td>
    <td>text</td>
    <td></td>
  </tr>
  <tr>
    <td><code>autoClose</code></td>
    <td>boolean</td>
    <td></td>
  </tr>
  <tr>
    <td><code>growl</code></td>
    <td>boolean</td>
    <td></td>
  </tr>
  <tr>
    <td><code>closeInterval</code></td>
    <td>number</td>
    <td></td>
  </tr>
  <tr>
    <td><code>clickToClose</code></td>
    <td>boolean</td>
    <td></td>
  </tr>
 </table>
