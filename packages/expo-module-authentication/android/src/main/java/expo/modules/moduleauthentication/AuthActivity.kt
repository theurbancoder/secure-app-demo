package expo.modules.moduleauthentication

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.theurbancoder.kotlin.secore.core.SecureCore
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject

class AuthActivity : AppCompatActivity(), KoinComponent {
    private val secureCore: SecureCore by inject()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.modal_fullscreen_layout)

        val closeButton: Button = findViewById(R.id.closeButton)
        closeButton.setOnClickListener {
            this.secureCore.authetenticate()
            val resultIntent = Intent().apply {
                putExtra("isAuthenticated", true)
            }
            setResult(Activity.RESULT_OK, resultIntent)
            finish()
            overridePendingTransition(R.anim.fade_in, R.anim.fade_out)
        }
    }
}